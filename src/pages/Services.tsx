import { useEffect, useState } from 'react';
import { fetchServices, type Service } from '../lib/service';

export default function Services() {
  const [data, setData] = useState<Service[]>([]);
  const [loading, setL] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await fetchServices());
      } catch (e: any) {
        setErr(e?.message ?? 'error');
      } finally {
        setL(false);
      }
    })();
  }, []);

  if (loading) return <div style={{ padding: 24 }}>กำลังโหลดบริการ…</div>;
  if (err) return <div style={{ padding: 24, color: 'crimson' }}>เกิดข้อผิดพลาด: {err}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>บริการของเรา</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        {data.map(s => (
          <div key={s.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
            <h3>{s.name}</h3>
            <p>ระยะเวลา: {s.duration_min} นาที</p>
            <p>ราคา: {s.price} บาท</p>
            {s.description && <p>{s.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
