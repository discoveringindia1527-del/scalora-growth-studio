const keywords = [
  "Instagram Growth", "TikTok Virality", "Meta Ads", "UGC Campaigns",
  "Influencer Marketing", "SEO & GEO", "LinkedIn Strategy",
  "Reddit Communities", "B2B Lead Gen", "Organic Scale",
];
const doubled = [...keywords, ...keywords];

const Marquee = () => (
  <div className="border-y border-border overflow-hidden py-4 bg-muted/30">
    <div className="animate-marquee flex whitespace-nowrap">
      {doubled.map((kw, i) => (
        <span key={i} className="flex items-center text-sm text-muted-foreground font-display tracking-wide">
          <span className="mx-6">{kw}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
