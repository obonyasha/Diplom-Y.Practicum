export default class StatisticsElement {
  constructor() {
  }

  getTemplateBarchartRow(date, count, percent) {
    const templateBarchart = `
    <div class="barchart__item">
      <p class="barchart__day">${date}</p>
      <div class="barchart__data">
        <div class="barchart__quantity" style = "width: ${percent}%;">
          <p class="barchart__value">${count}</p>
        </div>
      </div>
    </div>`;
    return templateBarchart;
  }

  getTemplateScale(value) {
    const templateScale = `<p class="barchart__scale-value barchart__name-axis">0</p>
    <p class="barchart__scale-value barchart__name-axis">${value['25']}</p>
    <p class="barchart__scale-value barchart__name-axis">${value['50']}</p>
    <p class="barchart__scale-value barchart__name-axis">${value['75']}</p>
    <p class="barchart__scale-value barchart__name-axis">${value['100']}</p>`;
    return templateScale;
  }
}
