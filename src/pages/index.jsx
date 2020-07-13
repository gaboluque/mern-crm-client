import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import makeQuery from '../hooks/makeQuery';
import { GET_DASHBOARD_QUERY } from '../queries/userQueries';
import Loader from '../components/Layout/Feedback/Loader';

const flatData = (data, key) =>
  data.map(({ [key]: [obj], total }) => ({
    name: obj.name,
    total,
  }));

const barChart = (data, xKey, yKey) => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={xKey} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={yKey} fill="#3182CE" />
  </BarChart>
);

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [bestClients, setBestClients] = useState([]);
  const { data, loading: loadingDashboard } = makeQuery({
    query: GET_DASHBOARD_QUERY,
    polling: 60000,
  });

  useEffect(() => {
    if (!loadingDashboard) {
      const { getBestSellers, getBestClients } = data;
      setBestSellers(flatData(getBestSellers, 'seller'));
      setBestClients(flatData(getBestClients, 'client'));
    }
  }, [data]);

  return (
    <div className="dashboard">
      <h1 className="mb-5">Dashboard</h1>
      {loadingDashboard ? (
        <Loader />
      ) : (
        <div className="dashboard-content">
          <h3>Best sellers</h3>
          {barChart(bestSellers, 'name', 'total')}
          <h3>Best clients</h3>
          {barChart(bestClients, 'name', 'total')}
        </div>
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
