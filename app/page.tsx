import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <section
        id="hero"
        aria-label="Hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 32px 80px",
          position: "relative" as const,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "20%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(0,229,204,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "150px",
            right: "15%",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-badge fade-up"
          role="status"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "20px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: "var(--green)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.3px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 6px var(--green)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Alpha · AGPLv3 Open Core · Self-Hosted
        </div>

        <h1
          className="hero-title fade-up fade-up-1"
          style={{
            fontSize: "clamp(44px, 6vw, 78px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2.5px",
            maxWidth: "860px",
            marginBottom: "24px",
          }}
        >
          Engineering metrics
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } as React.CSSProperties}
          >
            on your infrastructure.
          </span>
        </h1>

        <p
          className="hero-sub fade-up fade-up-2"
          style={{
            fontSize: "19px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "580px",
            marginBottom: "40px",
            fontWeight: 400,
          }}
        >
          Track DORA metrics, CI/CD performance, and team velocity across all
          your teams — without sending a single byte to someone else&apos;s
          cloud.
        </p>

        <div
          className="hero-actions fade-up fade-up-3"
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/demo" className="btn-demo">
            ▶ Try Demo Preview
          </Link>
          <a href="#quickstart" className="btn-ghost btn-large">
            Deploy in 5 minutes
          </a>
          <Link href="/docs" className="btn-ghost btn-large">
            Read the docs
          </Link>
        </div>

        <div
          className="hero-stats fade-up fade-up-4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            color: "var(--text-muted)",
            fontSize: "13px",
            fontWeight: 500,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <strong style={{ color: "var(--text-primary)" }}>100%</strong> Self-hosted
          </div>
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "var(--border-bright)",
            }}
            aria-hidden="true"
          />
          <div>
            <strong style={{ color: "var(--text-primary)" }}>20</strong> API endpoints
          </div>
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "var(--border-bright)",
            }}
            aria-hidden="true"
          />
          <div>
            <strong style={{ color: "var(--text-primary)" }}>Go</strong> +{" "}
            <strong style={{ color: "var(--text-primary)" }}>PostgreSQL</strong> +{" "}
            <strong style={{ color: "var(--text-primary)" }}>TimescaleDB</strong>
          </div>
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "var(--border-bright)",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              fontSize: "11px",
              padding: "3px 9px",
              borderRadius: "5px",
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
              background: "rgba(245,158,11,0.12)",
              color: "var(--orange)",
              border: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            v0.1.0-alpha
          </div>
        </div>

        {/* Dashboard mockup */}
        <div
          className="hero-dashboard fade-up fade-up-4"
          aria-label="Metraly dashboard preview"
          role="img"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            margin: "48px auto 0",
          }}
        >
          <div
            className="hero-dashboard-frame"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-bright)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.12)",
            }}
          >
            <div
              style={{
                background: "#0a0e14",
                borderBottom: "1px solid var(--border)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#febc2e",
                  }}
                />
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#28c840",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "4px 16px",
                    color: "var(--text-muted)",
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    minWidth: "240px",
                    textAlign: "center",
                  }}
                >
                  app.metraly.io/dashboards/cto
                </div>
              </div>
            </div>
            <div style={{ display: "flex", height: "380px" }}>
              <div
                style={{
                  width: "110px",
                  background: "#0a0e14",
                  borderRight: "1px solid var(--border)",
                  padding: "16px 0",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    padding: "8px 12px 4px",
                    color: "var(--text-muted)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}
                >
                  Dashboards
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    color: "var(--cyan)",
                    borderLeft: "2px solid var(--cyan)",
                    background: "rgba(0,229,204,0.06)",
                  }}
                >
                  CTO
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    borderLeft: "2px solid transparent",
                  }}
                >
                  VP Engineering
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    borderLeft: "2px solid transparent",
                  }}
                >
                  Tech Lead
                </div>
                <div
                  style={{
                    padding: "8px 12px 4px",
                    color: "var(--text-muted)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                  }}
                >
                  Analytics
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    borderLeft: "2px solid transparent",
                  }}
                >
                  Metrics Explorer
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    color: "var(--purple)",
                    borderLeft: "2px solid transparent",
                  }}
                >
                  AI Assistant ✦
                </div>
              </div>
              <div style={{ flex: 1, overflow: "hidden", padding: "16px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "2px",
                  }}
                >
                  CTO Dashboard
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  Strategic health, DORA trends, team velocity
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    Overview
                  </div>
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      color: "var(--cyan)",
                      background: "rgba(0,229,204,0.1)",
                    }}
                  >
                    CTO
                  </div>
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    VP Eng
                  </div>
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    Tech Lead
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Engineering Health
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "6px",
                        color: "var(--cyan)",
                      }}
                    >
                      84
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Deploy Frequency
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "6px",
                        color: "var(--green)",
                      }}
                    >
                      4.2/day
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Lead Time
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "6px",
                        color: "var(--purple)",
                      }}
                    >
                      2.1 days
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "4px",
                      }}
                    >
                      Change Failure Rate
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "6px",
                        color: "var(--orange)",
                      }}
                    >
                      3.2%
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                      }}
                    >
                      Deployment Frequency — Last 30 days
                    </div>
                    <div style={{ height: "80px", position: "relative" as const, overflow: "hidden" }}>
                      [Chart Area]
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#111722",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                      }}
                    >
                      Team Velocity — Sprint vs prev sprint
                    </div>
                    <div style={{ height: "80px", position: "relative" as const, overflow: "hidden" }}>
                      [Chart Area]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA SOVEREIGNTY */}
      <section id="sovereignty" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="sov-grid">
            <div>
              <div className="section-eyebrow">Data Sovereignty</div>
              <h2 className="section-title">
                Your data stays
                <br />
                with you. Always.
              </h2>
              <p className="section-sub">
                No SaaS vendor ever sees or stores your metrics. Deploy on-prem,
                in your own VPC, or air-gapped. You own every byte.
              </p>
              <div className="sov-bullet">
                <div className="sov-bullet-icon" aria-hidden="true">
                  🏛️
                </div>
                <div>
                  <div className="sov-bullet-title">
                    Deploy On Your Infrastructure
                  </div>
                  <div className="sov-bullet-desc">
                    Run on bare metal, Docker, Kubernetes, or any cloud.
                    Your network, your rules.
                  </div>
                </div>
              </div>
              <div className="sov-bullet">
                <div className="sov-bullet-icon" aria-hidden="true">
                  🔍
                </div>
                <div>
                  <div className="sov-bullet-title">
                    Full Code Auditability
                  </div>
                  <div className="sov-bullet-desc">
                    The core platform is AGPLv3, so the source that processes
                    your engineering data stays open and auditable.
                  </div>
                </div>
              </div>
              <div className="sov-bullet">
                <div className="sov-bullet-icon" aria-hidden="true">
                  ✈️
                </div>
                <div>
                  <div className="sov-bullet-title">
                    Air-gapped Ready
                  </div>
                  <div className="sov-bullet-desc">
                    No telemetry, no callbacks home. Works in completely
                    isolated environments for compliance-heavy industries.
                  </div>
                </div>
              </div>
            </div>
            <div className="sov-diagram">
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                Comparison
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  className="sov-box"
                  style={{ borderColor: "rgba(239,68,68,0.2)" }}
                >
                  <div className="sov-box-title bad">
                    ⚠ SaaS Platforms
                  </div>
                  <div className="sov-box-desc">
                    Your Git data, PRs, CI logs &amp; team metrics flow through a
                    vendor&apos;s cloud. You hope their privacy policy holds.
                  </div>
                </div>
                <div
                  className="sov-vs"
                  aria-hidden="true"
                >
                  vs
                </div>
                <div
                  className="sov-box"
                  style={{ borderColor: "rgba(34,197,94,0.2)" }}
                >
                  <div className="sov-box-title good">
                    ✓ Metraly
                  </div>
                  <div className="sov-box-desc">
                    All data collected, processed, and stored on your own
                    servers. Zero external data exposure. Full compliance.
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span className="tag green">GDPR Ready</span>
                <span className="tag green">Audit-friendly</span>
                <span className="tag cyan">Air-gapped</span>
                <span className="tag cyan">Zero Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="section">
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">
            Everything your engineering org needs
          </h2>
          <p className="section-sub">
            From DORA metrics to AI-powered insights — all running on your
            own servers.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon cyan" aria-hidden="true">
                📊
              </div>
              <div className="feature-title">DORA Metrics</div>
              <div className="feature-desc">
                Track Deployment Frequency, Lead Time for Changes, Change
                Failure Rate, and MTTR. DORA Elite benchmarks built-in.
              </div>
              <div className="feature-tags">
                <span className="tag cyan">Elite</span>
                <span className="tag cyan">High</span>
                <span className="tag orange">Medium</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon green" aria-hidden="true">
                ⚡
              </div>
              <div className="feature-title">CI/CD Intelligence</div>
              <div className="feature-desc">
                Build success rates, flaky test detection, pipeline queue
                times, and mean time to recovery tracked automatically.
              </div>
              <div className="feature-tags">
                <span className="tag green">GitHub Actions</span>
                <span className="tag green">Jenkins</span>
                <span className="tag green">GitLab CI</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple" aria-hidden="true">
                🔀
              </div>
              <div className="feature-title">PR &amp; Code Review</div>
              <div className="feature-desc">
                PR cycle time, review queue depth, author velocity, stale
                branch alerts, and reviewer load balancing.
              </div>
              <div className="feature-tags">
                <span className="tag purple">Cycle Time</span>
                <span className="tag purple">Review Queue</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange" aria-hidden="true">
                🏃
              </div>
              <div className="feature-title">Sprint &amp; Team Velocity</div>
              <div className="feature-desc">
                Sprint burndowns, velocity trends, story point completion
                rates, and predictability scores per team.
              </div>
              <div className="feature-tags">
                <span className="tag orange">Jira</span>
                <span className="tag orange">Linear</span>
                <span className="tag orange">GitHub Issues</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon indigo" aria-hidden="true">
                🧩
              </div>
              <div className="feature-title">Custom Dashboards</div>
              <div className="feature-desc">
                Drag-and-drop widget builder with optimistic locking. Fork
                dashboards, share with specific teams, set custom layouts.
              </div>
              <div className="feature-tags">
                <span className="tag cyan">20+ Widgets</span>
                <span className="tag purple">Custom SQL</span>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon red" aria-hidden="true">
                📈
              </div>
              <div className="feature-title">Metrics Explorer</div>
              <div className="feature-desc">
                Deep-dive into any metric with custom time ranges, team
                filters, repository breakdowns, and custom formula
                computation.
              </div>
              <div className="feature-tags">
                <span className="tag orange">TimescaleDB</span>
                <span className="tag cyan">Custom Formulas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="section-eyebrow">Built For Everyone</div>
          <h2 className="section-title">Tailored to every role</h2>
          <p className="section-sub">
            Metraly delivers the right signal to the right person — not
            the same noisy dashboard for everyone.
          </p>
          <div className="roles-grid">
            <div className="role-card">
              <div
                className="role-avatar"
                style={{
                  background: "rgba(0,229,204,0.1)",
                  border: "1px solid rgba(0,229,204,0.2)",
                }}
                aria-hidden="true"
              >
                🧑‍💼
              </div>
              <div className="role-title">Team Lead</div>
              <div className="role-sub">Day-to-day team health</div>
              <ul className="role-points">
                <li>Spot PR review bottlenecks before they block deploys</li>
                <li>Balance workload across contributors fairly</li>
                <li>Track cycle time per engineer, per repo</li>
                <li>Receive alerts when a branch is stale 48h+</li>
              </ul>
            </div>
            <div className="role-card">
              <div
                className="role-avatar"
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
                aria-hidden="true"
              >
                👔
              </div>
              <div className="role-title">VP of Engineering / CTO</div>
              <div className="role-sub">Strategic overview</div>
              <ul className="role-points">
                <li>Executive DORA dashboards with velocity trends</li>
                <li>Compare teams fairly on normalized metrics</li>
                <li>Audit-ready reports for board/compliance</li>
                <li>Full data ownership — no vendor lock-in</li>
              </ul>
            </div>
            <div className="role-card">
              <div
                className="role-avatar"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
                aria-hidden="true"
              >
                ⚙️
              </div>
              <div className="role-title">DevOps / Platform Eng</div>
              <div className="role-sub">Pipeline &amp; infra health</div>
              <ul className="role-points">
                <li>CI/CD success rate and MTTR tracking</li>
                <li>Custom dashboards with raw TimescaleDB SQL</li>
                <li>Connect any tool via the plugin system</li>
                <li>Deploy on your own Kubernetes cluster</li>
              </ul>
            </div>
            <div className="role-card">
              <div
                className="role-avatar"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
                aria-hidden="true"
              >
                👩‍💻
              </div>
              <div className="role-title">Individual Contributor</div>
              <div className="role-sub">Personal impact view</div>
              <ul className="role-points">
                <li>See your own PRs, reviews, and CI history</li>
                <li>AI-generated recommendations to unblock yourself</li>
                <li>Sprint progress and point completion tracking</li>
                <li>Never be surprised by a stalled PR again</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai">
        <div className="section">
          <div className="ai-grid">
            <div>
              <div className="section-eyebrow">AI-Powered Insights</div>
              <h2 className="section-title">
                AI that works
                <br />
                for you, not the
                <br />
                other way around.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                }}
              >
                AI-assisted analysis is planned for paid editions: use your own
                API keys, your own models, or approved providers without
                moving raw engineering data into a third-party SaaS.
              </p>
              <div className="ai-options">
                <div className="ai-option-row">
                  <div
                    className="ai-option-icon"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    ⚡
                  </div>
                  <div>
                    <div className="ai-option-label">Managed Provider</div>
                    <div className="ai-option-sub">
                      Planned option for Pro and Enterprise deployments
                    </div>
                  </div>
                  <div
                    className="ai-option-badge"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      color: "var(--orange)",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    Planned
                  </div>
                </div>
                <div className="ai-option-row">
                  <div
                    className="ai-option-icon"
                    style={{
                      background: "rgba(0,229,204,0.1)",
                      border: "1px solid rgba(0,229,204,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    🔑
                  </div>
                  <div>
                    <div className="ai-option-label">BYO API Key</div>
                    <div className="ai-option-sub">
                      OpenAI-compatible endpoints with customer-controlled keys
                    </div>
                  </div>
                  <div
                    className="ai-option-badge"
                    style={{
                      background: "rgba(0,229,204,0.1)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(0,229,204,0.2)",
                    }}
                  >
                    Preview
                  </div>
                </div>
                <div className="ai-option-row">
                  <div
                    className="ai-option-icon"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      border: "1px solid rgba(168,85,247,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    🖥️
                  </div>
                  <div>
                    <div className="ai-option-label">Self-hosted LLM</div>
                    <div className="ai-option-sub">
                      Self-managed model endpoint for isolated environments
                    </div>
                  </div>
                  <div
                    className="ai-option-badge"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      color: "var(--purple)",
                      border: "1px solid rgba(168,85,247,0.2)",
                    }}
                  >
                    Planned
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  padding: "14px 16px",
                  background: "rgba(168,85,247,0.06)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                }}
              >
                <strong style={{ color: "var(--purple)" }}>
                  Private by design.
                </strong>{" "}
                No product telemetry in the core path. You control the endpoint,
                the model, and the context.
              </div>
            </div>
            <div>
              <div
                className="ai-chat-mock"
                role="img"
                aria-label="AI assistant chat interface preview"
              >
                <div className="ai-chat-header">
                  <div className="ai-chat-title">✦ AI Assistant</div>
                  <div className="ai-chat-badge">
                    Preview · Customer-controlled endpoint
                  </div>
                </div>
                <div className="ai-chat-body" aria-hidden="true">
                  <div className="ai-msg">
                    <div className="ai-msg-avatar bot">M</div>
                    <div className="ai-msg-bubble">
                      Hi! I&apos;m your Metraly AI assistant. Ask me anything
                      about your engineering metrics, build trends, team health, or
                      deployment patterns.
                    </div>
                  </div>
                  <div className="ai-msg">
                    <div className="ai-msg-avatar user">JD</div>
                    <div className="ai-msg-bubble user">
                      Why did CI time increase this week?
                    </div>
                  </div>
                  <div className="ai-msg">
                    <div className="ai-msg-avatar bot">M</div>
                    <div className="ai-msg-bubble">
                      Good question. Over the past 7 days, median CI time
                      rose from{" "}
                      <span className="ai-msg-highlight">3m 41s → 4m 22s</span>
                      {" "}— a 19% increase.
                      <br />
                      <br />
                      Primary driver: a 34% increase in test suite duration
                      on{" "}
                      <span className="ai-msg-highlight">api-gateway</span>
                      {" "}starting Tuesday after commit{" "}
                      <code
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          background: "rgba(255,255,255,0.05)",
                          padding: "1px 4px",
                          borderRadius: "3px",
                        }}
                      >
                        d7a21f
                      </code>
                      .
                    </div>
                  </div>
                  <div className="ai-msg">
                    <div className="ai-msg-avatar bot">M</div>
                    <div className="ai-msg-bubble">
                      <div
                        className="ai-typing"
                        aria-label="AI is typing"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ai-input-row">
                  <div
                    className="ai-input"
                    aria-label="Chat input placeholder"
                  >
                    Ask about your engineering metrics...
                  </div>
                  <button className="ai-send" aria-label="Send message">
                    Send
                  </button>
                </div>
                <div className="ai-footer">
                  Designed for private AI endpoints ·{" "}
                  <span>Preview capability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTS */}
      <section id="alerts" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="alerts-grid">
            <div>
              <div className="section-eyebrow">Alerts &amp; Notifications</div>
              <h2 className="section-title">
                Know before
                <br />
                it becomes a crisis.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "32px",
                }}
              >
                Set thresholds on any metric. Get alerts in Telegram, Slack,
                or Discord — delivered directly from your infrastructure with
                no data exposure.
              </p>
              <div className="alert-config">
                <div className="alert-config-header">Alert Rules</div>
                <div className="alert-config-body">
                  <div className="alert-rule">
                    <div className="alert-rule-header">
                      <div className="alert-rule-name">Cycle Time Spike</div>
                      <div className="alert-rule-status status-triggered">
                        🔴 Triggered
                      </div>
                    </div>
                    <div className="alert-rule-cond">
                      cycle_time &gt; 3 days AND team = &quot;backend&quot;
                    </div>
                    <div className="alert-rule-channels">
                      <span className="channel-chip chip-slack">Slack</span>
                      <span className="channel-chip chip-telegram">Telegram</span>
                    </div>
                  </div>
                  <div className="alert-rule">
                    <div className="alert-rule-header">
                      <div className="alert-rule-name">CI Success Rate Drop</div>
                      <div className="alert-rule-status status-active">
                        ✓ Active
                      </div>
                    </div>
                    <div className="alert-rule-cond">
                      ci_success_rate &lt; 80% WINDOW 24h
                    </div>
                    <div className="alert-rule-channels">
                      <span className="channel-chip chip-discord">Discord</span>
                      <span className="channel-chip chip-slack">Slack</span>
                    </div>
                  </div>
                  <div className="alert-rule">
                    <div className="alert-rule-header">
                      <div className="alert-rule-name">Stale Branch Alert</div>
                      <div className="alert-rule-status status-active">
                        ✓ Active
                      </div>
                    </div>
                    <div className="alert-rule-cond">
                      branch_age &gt; 48h AND no_activity = true
                    </div>
                    <div className="alert-rule-channels">
                      <span className="channel-chip chip-telegram">Telegram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="msg-previews">
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  marginBottom: "12px",
                }}
              >
                Sample Notifications
              </div>
              <div className="msg-review">
                <div className="msg-header telegram">
                  📱 Telegram — #metraly-alerts
                </div>
                <div className="msg-body">
                  🔴{" "}
                  <strong>Alert: Cycle Time Spike</strong>
                  <br />
                  Team:{" "}
                  <span className="msg-val">Backend</span>
                  <br />
                  Cycle time:{" "}
                  <span className="msg-val">4.2 days</span> (threshold: 3d)
                  <br />
                  Affected PRs: 7
                  <br />
                  <span className="msg-link">→ View dashboard</span>
                </div>
              </div>
              <div className="msg-review">
                <div className="msg-header slack">
                  💬 Slack — #eng-alerts
                </div>
                <div className="msg-body">
                  ⚠️{" "}
                  <strong>CI Success Rate: 76%</strong>
                  <br />
                  Below threshold of{" "}
                  <span className="msg-ok">80%</span>
                  <br />
                  Repos affected: api-gateway, auth-service
                  <br />
                  Last 24h failures:{" "}
                  <span className="msg-val">14</span>
                  <br />
                  <span className="msg-link">→ Open Metrics Explorer</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: "12px",
                  padding: "12px 14px",
                  background: "rgba(0,229,204,0.05)",
                  border: "1px solid rgba(0,229,204,0.15)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                🔒 Alerts sent directly from your servers. Only the message
                itself leaves your network.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLUGINS */}
      <section id="plugins">
        <div className="section">
          <div className="section-eyebrow">Plugin Ecosystem</div>
          <h2 className="section-title">
            Extend Metraly without
            <br />
            touching the core.
          </h2>
          <p className="section-sub">
            Add new data sources, custom visualisations, alert
            destinations, or AI providers. Your plugins, your rules — all
            code runs on your servers.
          </p>
          <div className="plugins-grid">
            <div className="plugin-card">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                  aria-hidden="true"
                >
                  🐙
                </div>
                <div className="plugin-status beta">Core</div>
              </div>
              <div className="plugin-name">GitHub</div>
              <div className="plugin-desc">
                Repos, PRs, issues, GitHub Actions workflows
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                  aria-hidden="true"
                >
                  🦊
                </div>
                <div className="plugin-status beta">Preview</div>
              </div>
              <div className="plugin-name">GitLab</div>
              <div className="plugin-desc">
                Merge requests, pipelines, CI/CD
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(0,136,212,0.1)",
                    border: "1px solid rgba(0,136,212,0.25)",
                  }}
                  aria-hidden="true"
                >
                  📋
                </div>
                <div className="plugin-status beta">Preview</div>
              </div>
              <div className="plugin-name">Jira</div>
              <div className="plugin-desc">
                Sprints, issues, velocity, epics
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                  aria-hidden="true"
                >
                  ⚙️
                </div>
                <div className="plugin-status beta">Beta</div>
              </div>
              <div className="plugin-name">Jenkins</div>
              <div className="plugin-desc">
                Build jobs, pipeline stages, failure analysis
              </div>
            </div>
            <div className="plugin-card">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                  aria-hidden="true"
                >
                  📐
                </div>
                <div className="plugin-status beta">Beta</div>
              </div>
              <div className="plugin-name">Linear</div>
              <div className="plugin-desc">
                Projects, cycles, issues &amp; backlogs
              </div>
            </div>
            <div className="plugin-card coming-soon">
              <div className="plugin-icon-row">
                <div
                  className="plugin-icon"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  aria-hidden="true"
                >
                  🧩
                </div>
                <div className="plugin-status soon">Coming Soon</div>
              </div>
              <div className="plugin-name">Custom Plugin SDK</div>
              <div className="plugin-desc">
                Build your own data sources, widgets &amp; alert destinations
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "40px",
              padding: "28px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-bright)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>
                Plugin Marketplace
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                }}
              >
                Planned gallery for community and commercial connectors after
                the core demo and docs stabilize.
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "12px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  background: "rgba(168,85,247,0.1)",
                  color: "var(--purple)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  fontWeight: 600,
                }}
              >
                Coming Soon
              </span>
              <a
                href="#plugins"
                className="btn-ghost"
                style={{ fontSize: "13px", padding: "6px 14px" }}
              >
                Plugin Docs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section id="enterprise" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="section-eyebrow">Enterprise Roadmap</div>
          <h2 className="section-title">
            Built for controlled
            <br />
            deployments.
          </h2>
          <p className="section-sub">
            The Community core is self-hosted today. Pro and Enterprise
            editions add the commercial modules larger teams expect.
          </p>
          <div className="enterprise-grid">
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                🔐
              </div>
              <div>
                <div className="ent-title">Single Sign-On (OIDC)</div>
                <div className="ent-desc">
                  Planned Enterprise module for customer identity providers
                  and centralized access control.
                </div>
                <div className="sso-logos">
                  <span className="sso-chip">Okta</span>
                  <span className="sso-chip">Azure AD</span>
                  <span className="sso-chip">Keycloak</span>
                  <span className="sso-chip">Google Workspace</span>
                  <span className="sso-chip">Authentik</span>
                </div>
              </div>
            </div>
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                👥
              </div>
              <div>
                <div className="ent-title">Role-Based Access Control</div>
                <div className="ent-desc">
                  Planned role model for teams that need separated
                  admin, editor, viewer, and lead workflows.
                </div>
                <div className="sso-logos">
                  <span className="sso-chip">admin</span>
                  <span className="sso-chip">editor</span>
                  <span className="sso-chip">viewer</span>
                  <span className="sso-chip">team-lead</span>
                </div>
              </div>
            </div>
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                📜
              </div>
              <div>
                <div className="ent-title">Full Audit Trails</div>
                <div className="ent-desc">
                  Planned event history and SIEM export support for
                  regulated deployments.
                </div>
              </div>
            </div>
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                🌍
              </div>
              <div>
                <div className="ent-title">Data Residency Control</div>
                <div className="ent-desc">
                  Self-host in your own environment, with Enterprise
                  support for air-gapped and controlled deployments.
                </div>
              </div>
            </div>
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                🔔
              </div>
              <div>
                <div className="ent-title">Advanced Alerting</div>
                <div className="ent-desc">
                  Planned paid module for escalation policies,
                  multi-channel delivery, and per-team thresholds.
                </div>
              </div>
            </div>
            <div className="ent-card">
              <div
                className="ent-icon"
                aria-hidden="true"
              >
                🛡️
              </div>
              <div>
                <div className="ent-title">JWT RS256 Auth</div>
                <div className="ent-desc">
                  Planned hardened authentication profile for organizations
                  with stricter token and audit requirements.
                </div>
                <div className="sso-logos">
                  <span className="sso-chip">RS256</span>
                  <span className="sso-chip">15min tokens</span>
                  <span className="sso-chip">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section id="open-source">
        <div className="section">
          <div className="oss-grid">
            <div>
              <div className="section-eyebrow">Open Core</div>
              <h2 className="section-title">
                Built in public.
                <br />
                Licensed to last.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "36px",
                }}
              >
                Metraly Community is AGPLv3 open core. The self-hosted
                core stays free to run, inspect, and modify, while Pro and
                Enterprise editions fund commercial scale and support.
              </p>
              <div className="fsl-timeline">
                <div className="fsl-event">
                  <div className="fsl-year">COMMUNITY</div>
                  <div className="fsl-event-title">AGPLv3 Core</div>
                  <div className="fsl-event-desc">
                    Self-host the core platform for free, with source
                    available for audit, modification, and contribution.
                  </div>
                </div>
                <div className="fsl-event">
                  <div className="fsl-year">PRO / ENTERPRISE</div>
                  <div className="fsl-event-title">Commercial Modules</div>
                  <div className="fsl-event-desc">
                    Paid editions add private AI, advanced plugins,
                    alerting, exports, SSO, audit support, and commercial
                    support.
                  </div>
                </div>
              </div>
            </div>
            <div className="oss-links">
              <a
                href="https://github.com/getmetraly/metraly"
                className="oss-link"
                target="_blank"
                rel="noopener"
              >
                <div
                  className="oss-link-icon"
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="oss-link-label">getmetraly/metraly</div>
                  <div className="oss-link-sub">
                    Star us on GitHub · Alpha
                  </div>
                </div>
                <div className="oss-link-arrow" aria-hidden="true">
                  →
                </div>
              </a>
              <a href="/docs" className="oss-link">
                <div
                  className="oss-link-icon"
                  aria-hidden="true"
                >
                  📖
                </div>
                <div>
                  <div className="oss-link-label">Documentation</div>
                  <div className="oss-link-sub">
                    Full guides, API reference, architecture
                  </div>
                </div>
                <div className="oss-link-arrow" aria-hidden="true">
                  →
                </div>
              </a>
              <a href="/pricing" className="oss-link">
                <div
                  className="oss-link-icon"
                  aria-hidden="true"
                >
                  📄
                </div>
                <div>
                  <div className="oss-link-label">
                    Pricing &amp; License
                  </div>
                  <div className="oss-link-sub">
                    Community, Pro, and Enterprise editions
                  </div>
                </div>
                <div className="oss-link-arrow" aria-hidden="true">
                  →
                </div>
              </a>
              <a href="#contributing" className="oss-link">
                <div
                  className="oss-link-icon"
                  aria-hidden="true"
                >
                  🤝
                </div>
                <div>
                  <div className="oss-link-label">Contributing Guide</div>
                  <div className="oss-link-sub">
                    Help us build the best open-source metrics platform
                  </div>
                </div>
                <div className="oss-link-arrow" aria-hidden="true">
                  →
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section id="quickstart" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="section-eyebrow">Quick Start</div>
          <h2 className="section-title">
            Up and running
            <br />
            in 5 minutes.
          </h2>
          <p className="section-sub">
            Docker Compose, a seed database, and you&apos;re done. No
            configuration required to see the demo.
          </p>
          <div className="qs-grid">
            <div>
              <div
                style={{
                  background: "var(--code-bg)",
                  border: "1px solid var(--border-bright)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
                role="region"
                aria-label="Terminal showing quick start commands"
              >
                <div
                  style={{
                    padding: "10px 16px",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#ff5f57",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#febc2e",
                      }}
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#28c840",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      marginLeft: "8px",
                    }}
                  >
                    bash
                  </div>
                </div>
                <div
                  style={{
                    padding: "20px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    lineHeight: 2,
                  }}
                >
                  <div style={{ color: "var(--cyan)" }}># Clone the repository</div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>$</span>{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      git clone https://github.com/getmetraly/metraly.git
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>$</span>{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      cd metraly
                    </span>
                  </div>
                  <div>&nbsp;</div>
                  <div style={{ color: "var(--t-comment)" }}>
                    # Start all services
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>$</span>{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      make docker-up
                    </span>
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ Starting API server (Go)...
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ Starting PostgreSQL 16 + TimescaleDB...
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ Starting Redis...
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ Applying migrations (zero-dependency)...
                  </div>
                  <div>&nbsp;</div>
                  <div style={{ color: "var(--t-comment)" }}>
                    # Seed with demo data
                  </div>
                  <div>
                    <span style={{ color: "var(--cyan)" }}>$</span>{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      make seed
                    </span>
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ Seeded deterministic demo data
                  </div>
                  <div style={{ color: "var(--t-output)", fontSize: "12px" }}>
                    ✓ 5 teams, 3 months history, DORA ready
                  </div>
                  <div>&nbsp;</div>
                  <div style={{ color: "var(--t-dim)", fontSize: "12px" }}>
                    → Open http://localhost:3000
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="qs-steps">
                <div className="qs-step">
                  <div className="qs-step-num" aria-hidden="true">
                    1
                  </div>
                  <div>
                    <div className="qs-step-title">Clone &amp; Start</div>
                    <div className="qs-step-desc">
                      <code
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--cyan)",
                          fontSize: "12px",
                        }}
                      >
                        make docker-up
                      </code>{" "}
                      starts the API, PostgreSQL 16 with TimescaleDB, and Redis
                      in one command.
                    </div>
                  </div>
                </div>
                <div className="qs-step">
                  <div className="qs-step-num" aria-hidden="true">
                    2
                  </div>
                  <div>
                    <div className="qs-step-title">Seed Demo Data</div>
                    <div className="qs-step-desc">
                      <code
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--cyan)",
                          fontSize: "12px",
                        }}
                      >
                        make seed
                      </code>{" "}
                      fills your database with 3 months of deterministic demo
                      data across 5 teams.
                    </div>
                  </div>
                </div>
                <div className="qs-step">
                  <div className="qs-step-num" aria-hidden="true">
                    3
                  </div>
                  <div>
                    <div className="qs-step-title">Connect Your Sources</div>
                    <div className="qs-step-desc">
                      Use the Connect Sources wizard to link GitHub, GitLab,
                      Jira, Jenkins, and more in minutes.
                    </div>
                  </div>
                </div>
                <div className="qs-step">
                  <div className="qs-step-num" aria-hidden="true">
                    4
                  </div>
                  <div>
                    <div className="qs-step-title">Explore Your Metrics</div>
                    <div className="qs-step-desc">
                      DORA dashboards populate automatically. Customize
                      widgets, set alerts, and invite your team.
                    </div>
                  </div>
                </div>
              </div>
              <div className="qs-env">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "10px",
                  }}
                >
                  Key Environment Variables
                </div>
                <table className="env-table">
                  <tbody>
                    <tr>
                      <td>DATABASE_URL</td>
                      <td>PostgreSQL connection string</td>
                    </tr>
                    <tr>
                      <td>REDIS_URL</td>
                      <td>Redis connection string</td>
                    </tr>
                    <tr>
                      <td>JWT_PRIVATE_KEY</td>
                      <td>RS256 private key (PEM)</td>
                    </tr>
                    <tr>
                      <td>OIDC_ISSUER_URL</td>
                      <td>Optional SSO provider URL</td>
                    </tr>
                    <tr>
                      <td>AI_ENDPOINT</td>
                      <td>LLM endpoint (OpenAI-compatible)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog">
        <div className="section">
          <div className="section-eyebrow">From the Blog</div>
          <h2 className="section-title">Engineering behind Metraly</h2>
          <p
            className="section-sub"
            style={{ marginBottom: "40px" }}
          >
            Deep dives into the technical decisions that make Metraly fast,
            private, and extensible.
          </p>
          <div className="blog-grid">
            <a
              href="#"
              className="blog-card"
              aria-label="Blog post: Why we chose TimescaleDB"
            >
              <div
                className="blog-card-img"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(0,229,204,0.15),rgba(99,102,241,0.15))",
                }}
                aria-hidden="true"
              >
                <span>⏱️</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-tag">Engineering</div>
                <div className="blog-title">
                  Why we chose TimescaleDB over ClickHouse for engineering
                  metrics
                </div>
                <div className="blog-excerpt">
                  Time-series queries on Git events need more than raw
                  speed — they need SQL compatibility, hypertable
                  partitioning, and predictable query plans.
                </div>
                <div className="blog-meta">
                  May 1, 2026 · 8 min read
                </div>
              </div>
            </a>
            <a
              href="#"
              className="blog-card"
              aria-label="Blog post: Air-gapped AI running Llama on-prem"
            >
              <div
                className="blog-card-img"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(168,85,247,0.15),rgba(99,102,241,0.15))",
                }}
                aria-hidden="true"
              >
                <span>🤖</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-tag">AI</div>
                <div className="blog-title">
                  Air-gapped AI: running Llama 3 on-prem for engineering
                  insights
                </div>
                <div className="blog-excerpt">
                  How we built BYO-AI support that works with Ollama,
                  LM Studio, and any OpenAI-compatible endpoint — without
                  sending a byte to third-party APIs.
                </div>
                <div className="blog-meta">
                  Apr 18, 2026 · 6 min read
                </div>
              </div>
            </a>
            <a
              href="#"
              className="blog-card"
              aria-label="Blog post: Zero-dependency migration runner in Go"
            >
              <div
                className="blog-card-img"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(34,197,94,0.15),rgba(0,229,204,0.15))",
                }}
                aria-hidden="true"
              >
                <span>🔧</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-tag">Go · Architecture</div>
                <div className="blog-title">
                  Building a zero-dependency migration runner in Go
                </div>
                <div className="blog-excerpt">
                  Why we skipped golang-migrate and built a 200-line
                  runner that&apos;s embedded in the binary, runs on startup,
                  and needs no CLI tooling.
                </div>
                <div className="blog-meta">
                  Apr 5, 2026 · 5 min read
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="#" className="btn-ghost">
              View all posts →
            </a>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" style={{ background: "var(--bg-surface)" }}>
        <div className="section">
          <div className="section-eyebrow">Community</div>
          <h2 className="section-title">Join the conversation</h2>
          <p
            className="section-sub"
            style={{ marginBottom: "40px" }}
          >
            Metraly is built by engineers, for engineers. Come say hello,
            report bugs, suggest features, or contribute code.
          </p>
          <div className="community-grid">
            <a
              href="https://github.com/getmetraly/metraly"
              className="community-card"
              target="_blank"
              rel="noopener"
              aria-label="GitHub repository"
            >
              <div
                className="community-icon"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--border)",
                }}
                aria-hidden="true"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="community-name">GitHub</div>
              <div className="community-desc">
                Star the repo, open issues, and submit pull requests
              </div>
              <div className="community-cta">
                github.com/getmetraly/metraly →
              </div>
            </a>
            <a
              href="#"
              className="community-card"
              aria-label="Discord community (coming soon)"
            >
              <div
                className="community-icon"
                style={{
                  background: "rgba(88,101,242,0.15)",
                  border: "1px solid rgba(88,101,242,0.25)",
                }}
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="#818cf8"
                >
                  <path d="M20.317 1.492a19.8 19.8 0 0 0-4.885-1.515.07.07 0 0 0-.079.037c-.21.375-.444.864-.57 1.25a18.27 18.27 0 0 0 5.993 13.159.07.07 0 0 0 .031.055c.007.01.021.012.03.013a19.736 19.736 0 0 1-3.03 4.432c-.12.072-.253.036-.3-.06a13.07 13.07 0 0 1-1.872-6.435c-.026-.06-.078-.12-.147-.107a219.7 219.7 0 0 0-2.838 0c-.069-.013-.121.047-.147.107a13.07 13.07 0 0 1-1.872 6.435c-.047.096-.18.132-.3.06a19.736 19.736 0 0 1-3.03-4.432.07.07 0 0 0 .031-.055 18.27 18.27 0 0 0 5.993-13.159c-.126-.386-.36-.875-.57-1.25a.07.07 0 0 0-.079-.037A19.8 19.8 0 0 0 3.677 1.492 18.174 18.174 0 0 0-5.657 2.778.07.07 0 0 0-.03.055A19.736 19.736 0 0 1 7.09 20.22c.067.072.17.07.24-.004a18.268 18.268 0 0 1 3.508-6.228c.054-.066.016-.165-.06-.198a219.7 219.7 0 0 0-2.808-4.004 18.268 18.268 0 0 1 3.508-6.228c.07-.074.173-.076.24.004a19.736 19.736 0 0 1 8.823-5.95A.07.07 0 0 0 20.317 1.492z" />
                </svg>
              </div>
              <div className="community-name">Discord</div>
              <div className="community-desc">
                Chat with the team and other Metraly users in real-time
              </div>
              <div className="community-cta">
                Join Discord (coming soon) →
              </div>
            </a>
            <a
              href="https://github.com/getmetraly/metraly/discussions"
              className="community-card"
              target="_blank"
              rel="noopener"
              aria-label="GitHub Discussions"
            >
              <div
                className="community-icon"
                style={{
                  background: "rgba(0,229,204,0.1)",
                  border: "1px solid rgba(0,229,204,0.2)",
                }}
                aria-hidden="true"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="var(--cyan)"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <div className="community-name">Discussions</div>
              <div className="community-desc">
                Ask questions, share ideas, and see what others are
                building
              </div>
              <div className="community-cta">GitHub Discussions →</div>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section">
          <div className="section-eyebrow">Design Partners</div>
          <h2 className="section-title">Built with engineering teams</h2>
          <p
            className="section-sub"
            style={{ marginBottom: "40px" }}
          >
            Metraly is in alpha. We are validating the product with teams
            that need self-hosted engineering metrics, private AI, and
            transparent operational data.
          </p>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars" aria-label="Focus area">
                01
              </div>
              <div className="testi-quote">
                Self-hosted DORA dashboards for teams that cannot send
                Git, CI/CD, or delivery data into external SaaS tools.
              </div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg,#6366f1,#a855f7)",
                  }}
                  aria-hidden="true"
                >
                  DP
                </div>
                <div>
                  <div className="testi-name">Design partner fit</div>
                  <div className="testi-role">
                    Engineering leadership and platform teams
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars" aria-label="Focus area">
                02
              </div>
              <div className="testi-quote">
                Synthetic demo data first, then private pilots where teams
                can compare Metraly against existing reporting workflows.
              </div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg,#00e5cc,#6366f1)",
                  }}
                  aria-hidden="true"
                >
                  PV
                </div>
                <div>
                  <div className="testi-name">Pilot validation</div>
                  <div className="testi-role">
                    Mock data preview before real deployment
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars" aria-label="Focus area">
                03
              </div>
              <div className="testi-quote">
                Roadmap feedback on paid Pro and Enterprise modules:
                private AI, alerts, exports, SSO, audit support, and
                support terms.
              </div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg,#22c55e,#00e5cc)",
                  }}
                  aria-hidden="true"
                >
                  RM
                </div>
                <div>
                  <div className="testi-name">Roadmap input</div>
                  <div className="testi-role">
                    Community, Pro, and Enterprise planning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
