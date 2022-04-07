export default function getAncestor(element, ancestor) {
    let chosenAncestor = element;
    for (let i = 0; i < ancestor; i++) {
        chosenAncestor = chosenAncestor.parentElement;
    }
    return chosenAncestor;
}
