export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
     
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-element/20" />
          
          <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-element animate-spin" />
        </div>

        <h1 className="text-2xl font-semibold font-riot tracking-wide text-element animate-pulse">
          ListIQ
        </h1>

      </div>
    </div>
  )
}