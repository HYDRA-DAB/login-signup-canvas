import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, UserIcon, MailIcon, LockIcon } from "lucide-react";

interface AuthCardProps {
  isLogin: boolean;
  onToggle: () => void;
  onSubmit: (email: string, password: string, name?: string) => void;
}

export function AuthCard({ isLogin, onToggle, onSubmit }: AuthCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, isLogin ? undefined : name);
  };

  return (
    <Card className="glass-card w-full max-w-md mx-auto border-white/20">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-effect">
          <UserIcon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          {isLogin ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-white/70">
          {isLogin 
            ? "Sign in to your account to continue" 
            : "Join us today and start your journey"
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/90">Full Name</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 glass-card border-white/30 text-white placeholder:text-white/50 focus:border-primary-glow"
                  required={!isLogin}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/90">Email</Label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 glass-card border-white/30 text-white placeholder:text-white/50 focus:border-primary-glow"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white/90">Password</Label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 glass-card border-white/30 text-white placeholder:text-white/50 focus:border-primary-glow"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-smooth"
              >
                {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <Button 
                type="button" 
                variant="link" 
                className="text-white/70 hover:text-white p-0 h-auto text-sm"
              >
                Forgot password?
              </Button>
            </div>
          )}

          <Button 
            type="submit" 
            variant="auth" 
            className="w-full h-12 text-lg font-semibold"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="text-center">
          <span className="text-white/70 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <Button 
            type="button"
            variant="link" 
            onClick={onToggle}
            className="text-primary-glow hover:text-white p-0 h-auto text-sm font-semibold transition-smooth"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}