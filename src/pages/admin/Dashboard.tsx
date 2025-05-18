import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Award, 
  Image, 
  Newspaper, 
  Home,
  Edit3,
  Layers,
  Users 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from '../../components/admin/AdminLayout';
import Card from '../../components/ui/Card';
import { CardBody } from '../../components/ui/Card';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const adminCards = [
    {
      title: 'Edit Hero',
      description: 'Update the homepage hero section content and image',
      icon: <Home size={40} className="text-primary-500" />,
      link: '/admin/hero',
      color: 'bg-primary-50',
    },
    {
      title: 'Edit About',
      description: 'Update your biography and profile image',
      icon: <User size={40} className="text-secondary-500" />,
      link: '/admin/about',
      color: 'bg-secondary-50',
    },
    {
      title: 'Manage Achievements',
      description: 'Add, edit, or remove achievements from your timeline',
      icon: <Award size={40} className="text-green-500" />,
      link: '/admin/achievements',
      color: 'bg-green-50',
    },
    {
      title: 'Manage Gallery',
      description: 'Upload, organize, and delete images from your gallery',
      icon: <Image size={40} className="text-purple-500" />,
      link: '/admin/gallery',
      color: 'bg-purple-50',
    },
    {
      title: 'Manage News',
      description: 'Create, edit, and publish news articles and updates',
      icon: <Newspaper size={40} className="text-blue-500" />,
      link: '/admin/news',
      color: 'bg-blue-50',
    },
  ];

  return (
    <AdminLayout>
      <div className="pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back{user?.email ? `, ${user.email}` : ''}. Manage your website content here.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {adminCards.map((card, index) => (
            <Link key={index} to={card.link} className="block group">
              <Card className="h-full transition-all duration-200 border border-gray-100 hover:border-primary-200 hover:shadow-lg">
                <CardBody className="flex flex-col h-full">
                  <div className={`p-4 rounded-full mb-4 inline-block ${card.color}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  
                  <div className="mt-auto">
                    <span className="text-primary-600 group-hover:text-primary-700 font-medium inline-flex items-center transition-colors">
                      Manage
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardBody>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-orange-50 mr-4">
                  <Edit3 className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quick Update</h3>
                  <p className="text-gray-500 text-sm">Frequent actions</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Link to="/admin/news/new" className="block p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-gray-800 font-medium">Add News Article</span>
                </Link>
                <Link to="/admin/achievements/new" className="block p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-gray-800 font-medium">Add Achievement</span>
                </Link>
                <Link to="/admin/gallery/upload" className="block p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-gray-800 font-medium">Upload Photos</span>
                </Link>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-50 mr-4">
                  <Layers className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Site Overview</h3>
                  <p className="text-gray-500 text-sm">Content stats</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-2xl font-bold text-primary-600">5</div>
                  <div className="text-gray-600 text-sm">News Articles</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-2xl font-bold text-primary-600">12</div>
                  <div className="text-gray-600 text-sm">Achievements</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-2xl font-bold text-primary-600">24</div>
                  <div className="text-gray-600 text-sm">Gallery Images</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="text-2xl font-bold text-primary-600">2</div>
                  <div className="text-gray-600 text-sm">Admin Users</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;