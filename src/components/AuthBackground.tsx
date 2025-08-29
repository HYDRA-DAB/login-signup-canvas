export function AuthBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: "0s", animationDuration: "4s" }} />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: "2s", animationDuration: "6s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: "1s", animationDuration: "5s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-20" />
    </div>
  );
}