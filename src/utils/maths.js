import lodash from "lodash";

export const getAveragePrice = (data) => {
    console.log('getAveragePrice');
    return lodash.round(data.reduce((acc, { price }) => acc + price, 0) / data.length);
}
