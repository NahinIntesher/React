import React from "react";
class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("Button Component is rendered");
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        {locale === "bn-BD" ? "Click here" : "এখানে ক্লিক করুন"}
      </button>
    );
  }
}
export default Button;
