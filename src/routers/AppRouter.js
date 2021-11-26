import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Account from '../pages/Account'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import UsersPage from '../pages/Admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'

import Layout from '../components/layout.js/Layout'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/projects' element={<ProjectsPage />} />
          <Route exact path='/project/:projectId' element={<ProjectPage />} />
          <Route exact path='/admin/users' element={<UsersPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
