import robot from 'robotjs';
export default (req, res) => {
  robot.keyTap("down");
  res.statusCode = 200
  res.json(true)
}
