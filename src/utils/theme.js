export const theme = {
    colors: {
      primary: {
        gradient: "bg-gradient-to-r from-violet-200 to-pink-200",
        hover_gradient: "hover:bg-gradient-to-r hover:from-violet-300 hover:to-pink-300",
        text: "text-violet-700",
        hover: "hover:text-violet-900",
        border: "border-violet-200",
        background: "bg-violet-50"
      },
      muted: {
        text: "text-slate-600",
        hover: "hover:text-slate-900",
        border: "border-slate-200",
        background: "bg-slate-50"
      }
    },
    animations: {
      card: "transition-all duration-300 ease-in-out hover:border-violet-200 hover:bg-gradient-to-b from-white to-slate-50",
      link: "transition-all duration-300 relative group",
      button: "transition-all duration-300 hover:scale-[0.98]"
    }
  };