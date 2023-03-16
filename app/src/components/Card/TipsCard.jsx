import "./TipsCard.scss";

export default function TipsCard({ content }) {
  return (
    <div className="TipsCard">
      <h6 className="TipsCard-title">Tips</h6>
      <p className="TipsCard-content">{content}</p>
    </div>
  );
}
