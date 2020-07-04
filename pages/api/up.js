import robot from 'robotjs';
export default (req, res) => {
  robot.keyTap("up");
  res.statusCode = 200
  res.json(true)
}
