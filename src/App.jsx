import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyLearning } from './routes/my-learning';
import { TrainingDetails } from './routes/training-details';
import { Layout } from './components/layout';
import { Login } from './routes/login';
import { NotFound } from './routes/not-found';
import { Dashboard } from './routes/dashboard';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>This is the main app</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyLearning />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/training" element={<TrainingDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}

export default App;
