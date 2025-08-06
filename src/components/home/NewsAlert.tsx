import { ArrowRight, Sparkles, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface NewsAlertProps {
  className?: string;
}

// 广告位数据配置
const ads = [
  {
    id: 1,
    content: "全新的 AI 简历优化功能已上线",
    url: null, // 不跳转，只是显示
    icon: <Sparkles className="w-4 h-4" />,
    variant: "primary" as const
  },
  {
    id: 2, 
    content: "26/25 届秋招信息汇总上线!",
    url: "https://hc.offernow.cn",
    icon: <Briefcase className="w-4 h-4" />,
    variant: "secondary" as const
  },
  {
    id: 3,
    content: "最新校招信息获取",
    url: "https://hc.offernow.cn", 
    icon: <Briefcase className="w-4 h-4" />,
    variant: "accent" as const
  }
];

export default function NewsAlert({ className }: NewsAlertProps) {
  const t = useTranslations("home");

  return (
    <div className={cn("flex flex-col items-center gap-2 md:gap-3", className)}>
      {ads.map((ad) => (
        <div
          key={ad.id}
          className={cn(
            "relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full",
            "shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:shadow-white/5",
            "border transition-all duration-300 group",
            {
              // 主要广告位样式（AI功能）
              "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/80 dark:border-purple-500/30 text-purple-700 dark:text-purple-300": ad.variant === "primary",
              // 秋招信息样式 
              "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200/80 dark:border-orange-500/30 text-orange-700 dark:text-orange-300": ad.variant === "secondary",
              // 校招信息样式
              "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200/80 dark:border-green-500/30 text-green-700 dark:text-green-300": ad.variant === "accent"
            },
            ad.url && "cursor-pointer hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:scale-105"
          )}
          onClick={ad.url ? () => window.open(ad.url, '_blank') : undefined}
        >
          {ad.icon}
          <span className="whitespace-nowrap font-medium">
            {ad.content}
          </span>
          {ad.url && (
            <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}
