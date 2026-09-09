import Link from "next/link";
export default function NotFound() {
  return (
    <main className="section detail-page">
      <div className="panel detail-card">
        <p className="eyebrow">{"// 404"}</p>
        <h1>Page not found.</h1>
        <p className="section-copy">
          This page may have moved, or the address may be incorrect.
        </p>
        <Link className="primary-btn" href="/">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
