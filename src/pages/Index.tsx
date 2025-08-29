import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "@/components/AuthCard";
import { AuthBackground } from "@/components/AuthBackground";
import { toast } from "sonner";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async (email: string, password: string, name?: string) => {
    try {
      // Show loading toast
      const loadingToast = toast.loading(isLogin ? "Signing in..." : "Creating account...");
      
      // Simulate auth process (replace with Supabase when connected)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Show success toast
      toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
      
      // Navigate to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
      
    } catch (error) {
      toast.error(isLogin ? "Failed to sign in" : "Failed to create account");
      console.error("Auth error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AuthBackground />
      
      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        <AuthCard 
          isLogin={isLogin}
          onToggle={() => setIsLogin(!isLogin)}
          onSubmit={handleAuth}
        />
        
        {/* Info Banner */}
        <div className="mt-8 text-center">
          <div className="glass-card p-4 border-white/20 rounded-lg">
            <p className="text-white/70 text-sm">
              🚀 Connect to <span className="text-primary-glow font-semibold">Supabase</span> for real authentication
            </p>
            <p className="text-white/50 text-xs mt-1">
              Click the green Supabase button in the top right
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
