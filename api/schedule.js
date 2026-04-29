export default async function handler(req, res) {
  try {
    const scheduleData = await import('../schedule-data.js');
    res.status(200).json(scheduleData.default || scheduleData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load schedule" });
  }
}