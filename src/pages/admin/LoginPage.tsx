import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { CardHeader, CardBody, CardFooter } from '../../components/ui/Card';

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { user, signIn, loading: authLoading } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setLoginError(null);
    const { error } = await signIn(data.email, data.password);
    if (error) {
      setLoginError('Invalid email or password');
    }
  };

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
          <p className="mt-2 text-gray-600">Sign in to access the admin dashboard</p>
        </div>
        
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Sign in to your account</h2>
          </CardHeader>
          
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              {loginError && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                  {loginError}
                </div>
              )}
              
              <Input
                label="Email Address"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  }
                })}
                error={errors.email?.message}
                placeholder="email@example.com"
              />
              
              <Input
                label="Password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                error={errors.password?.message}
                placeholder="••••••••"
              />
              
              <Button
                type="submit"
                variant="primary"
                className="w-full mt-4"
                isLoading={authLoading}
              >
                Sign In
              </Button>
            </form>
          </CardBody>
          
          <CardFooter className="text-center text-sm text-gray-600">
            <p>Need access? Contact the site administrator.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;