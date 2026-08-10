// Lista de espera de Galleté (Colombia). El interesado deja su contacto y le avisa al equipo por correo.
// Reusa el MISMO webhook de Make que ya manda correos al equipo (leads/entregas). El 'asistente' lleva
// "REMAKE" para caer en la ruta que va a los 3 correos del equipo (Mateo + Juli + personal).
const HOOK = 'https://hook.us2.make.com/wh919mb2fqvrhkdk95h1oxan9u8rdax5';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};

  const nombre   = String(b.nombre   || '').trim().slice(0, 100);
  const contacto = String(b.contacto || '').trim().slice(0, 140); // correo o WhatsApp
  const origen   = String(b.origen   || 'Galleté Colombia').slice(0, 60);

  if (!contacto) return res.status(400).json({ error: 'Déjanos tu correo, por favor.' });

  const fecha = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota', hour12: false });
  const mensaje = [
    nombre ? ('Nombre: ' + nombre) : '',
    'Correo: ' + contacto,
    'Quiere ser de los primeros en probar Galleté cuando llegue a Colombia.'
  ].filter(Boolean).join('\n');

  const payload = JSON.stringify({
    fecha,
    canal: 'Lista de espera · ' + origen,
    asistente: 'REMAKE · Lista de espera',
    mensaje,
    respuesta: '',
    tema: '🍪 Nuevo interesado — Galleté Colombia',
    contacto: contacto
  });

  const ctrl = new AbortController();
  const t = setTimeout(function () { ctrl.abort(); }, 8000);
  try {
    const r = await fetch(HOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, signal: ctrl.signal });
    if (!r.ok) throw new Error('hook ' + r.status);
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ error: 'No se pudo registrar ahora, intenta de nuevo.' });
  } finally {
    clearTimeout(t);
  }
}
