// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
function filterAndSortProducts(products: Product[]): Product[] {
    const uniqueProd: Product[] = [];
    for (let i = 0; i < products.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueProd.length; j++) {
            if (products[i].name === uniqueProd[j].name) {
                isUnique = false;
                break;
            }
        }
        if(isUnique) {
            uniqueProd.push(products[i]);
        }
    }
    uniqueProd.sort((a,b) => a.price - b.price);

    return uniqueProd; 
}

module.exports = { filterAndSortProducts }