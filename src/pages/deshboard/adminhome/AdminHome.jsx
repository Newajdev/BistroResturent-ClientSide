import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaListAlt, FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
    const { user } = useAuth()
    const AxiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/admin-stats')
            return res.data
        }

    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/order-stats')
            return res.data;
        }
    })

    // custom shape for the bhar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // pi chart

    const RADIAN = Math.PI / 180;
    

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };


    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.TotalRevenue }
    })


    return (
        <div>
            <h2 className="text-2xl">Hi, <span className="text-green-600 font-semibold">{user.displayName}</span> Welcome Back </h2>
            <div className="my-6">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary text-3xl">
                            <FaDollarSign></FaDollarSign>
                        </div>
                        <div className="stat-title">Total Revenue</div>
                        <div className="stat-value text-primary">${stats?.revenue}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                            <FaUserAlt></FaUserAlt>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary text-3xl">{stats?.users}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                            <FaListAlt></FaListAlt>
                        </div>
                        <div className="stat-title">Total Items</div>
                        <div className="stat-value text-secondary">{stats?.menuItems}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                            <FaCartShopping></FaCartShopping>
                        </div>
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value text-secondary">{stats?.orders}</div>
                    </div>


                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-2/4">
                    <BarChart
                        width={600}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-2/4 flex justify-end mr-6">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;