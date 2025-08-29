import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserIcon, 
  SettingsIcon, 
  LogOutIcon, 
  BellIcon, 
  ActivityIcon,
  TrendingUpIcon
} from "lucide-react";

const Dashboard = () => {
  const handleLogout = () => {
    // Logout logic will be implemented when Supabase is connected
    console.log("Logout clicked - implement with Supabase");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-background/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center glow-effect">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
                <p className="text-sm text-white/70">Welcome back!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="glass" size="icon">
                <BellIcon className="w-4 h-4" />
              </Button>
              <Button variant="glass" size="icon">
                <SettingsIcon className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOutIcon className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="glass-card border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center justify-between">
                Activity
                <ActivityIcon className="w-5 h-5 text-primary-glow" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">42</div>
              <p className="text-sm text-white/70">Recent actions</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center justify-between">
                Growth
                <TrendingUpIcon className="w-5 h-5 text-primary-glow" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+12%</div>
              <p className="text-sm text-white/70">This month</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center justify-between">
                Status
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Online</div>
              <p className="text-sm text-white/70">All systems operational</p>
            </CardContent>
          </Card>

          {/* Welcome Card */}
          <Card className="glass-card border-white/20 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Welcome to your Dashboard</CardTitle>
              <CardDescription className="text-white/70 text-lg">
                Your authentication system is ready! To enable full functionality with user management, 
                database storage, and secure authentication, connect to Supabase using the green button in the top right.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">🔐 Authentication Ready</h3>
                  <p className="text-white/70 text-sm">
                    Login and signup forms are implemented with beautiful UI and form validation.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">🎨 Modern Design</h3>
                  <p className="text-white/70 text-sm">
                    Glass-morphism design with smooth animations and responsive layout.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">📱 Mobile Responsive</h3>
                  <p className="text-white/70 text-sm">
                    Optimized for all screen sizes with touch-friendly interactions.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">⚡ Ready for Supabase</h3>
                  <p className="text-white/70 text-sm">
                    Connect Supabase to enable real authentication, database, and backend features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;