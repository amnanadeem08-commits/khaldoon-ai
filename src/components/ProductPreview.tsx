type PreviewProps = {
  title: string;
  caption: string;
  variant?: "excel" | "databot" | "dashboard";
};

export function ProductPreview({ title, caption, variant = "dashboard" }: PreviewProps) {
  return (
    <figure className="product-preview" aria-label={`${title} preview`}>
      <div className={`preview-frame preview-${variant}`}>
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <em>{title}</em>
        </div>
        <div className="preview-body">
          {variant === "excel" && (
            <>
              <div className="preview-toolbar" />
              <div className="preview-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={i % 4 === 0 ? "cell head" : "cell"} />
                ))}
              </div>
              <div className="preview-charts">
                <div className="bar-chart">
                  <i style={{ height: "55%" }} />
                  <i style={{ height: "80%" }} />
                  <i style={{ height: "40%" }} />
                  <i style={{ height: "70%" }} />
                </div>
                <div className="kpi-stack">
                  <div className="kpi" />
                  <div className="kpi" />
                </div>
              </div>
            </>
          )}
          {variant === "databot" && (
            <>
              <div className="preview-sidebar" />
              <div className="preview-main">
                <div className="preview-kpis">
                  <div className="kpi" />
                  <div className="kpi" />
                  <div className="kpi" />
                </div>
                <div className="preview-charts">
                  <div className="line-panel" />
                  <div className="insight-panel" />
                </div>
              </div>
            </>
          )}
          {variant === "dashboard" && (
            <>
              <div className="preview-kpis">
                <div className="kpi" />
                <div className="kpi" />
                <div className="kpi" />
              </div>
              <div className="preview-charts">
                <div className="bar-chart wide">
                  <i style={{ height: "45%" }} />
                  <i style={{ height: "75%" }} />
                  <i style={{ height: "60%" }} />
                  <i style={{ height: "90%" }} />
                  <i style={{ height: "50%" }} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
