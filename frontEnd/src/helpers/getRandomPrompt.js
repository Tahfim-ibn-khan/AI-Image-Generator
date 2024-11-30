import { preDefinedPrompts } from "../assets/constants";

export function getRandomPrompt(currentPrompt) {
    if (preDefinedPrompts.length <= 1) return preDefinedPrompts[0];
    
    let randomPrompt;
    do {
        const randomNumber = Math.floor(Math.random() * preDefinedPrompts.length);
        randomPrompt = preDefinedPrompts[randomNumber];
    } while (randomPrompt === currentPrompt);

    return randomPrompt;
}
