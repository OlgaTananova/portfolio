import shoppingify from "./assets/images/shoppingify.jpg";
import portfolio from "./assets/images/portfolio.jpg";
import moviesExplorer from "./assets/images/movies-explorer.jpg";
import mesto from "./assets/images/mesto.jpg";
import travelRussia from "./assets/images/travelling-across-russia.jpg";
import howToLearn from "./assets/images/how-to-learn.jpg";

export  const resolveImagePath = (name:string) =>  {
    switch (name) {
        case ('shoppingify.jpg'): return shoppingify
        case ('portfolio.jpg'): return portfolio
        case('movies-explorer.jpg') : return moviesExplorer
        case('mesto.jpg') : return mesto
        case ('travelling-across-russia.jpg'):  return travelRussia
        case ('how-to-learn.jpg') : return  howToLearn
        default : return ''
    }
}
