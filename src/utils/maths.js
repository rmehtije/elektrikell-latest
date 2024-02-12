import lodash from "lodash";

export const getAveragePrice = (data) => {
    return lodash.round(data.reduce((acc, { price }) => acc + price, 0) / data.length);
}
