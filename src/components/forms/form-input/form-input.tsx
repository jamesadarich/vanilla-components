import { Component, Prop } from "@stencil/core";

@Component({
    tag: "vanilla-form-input",
    styleUrl: "form-input.scss",
    // shadow: true
})
export class VanillaTextPlaceholder {
    @Prop()
    labelText;

    render() {
        const id = "something";
        
        return [
            <label htmlFor={id}>{this.labelText}</label>,
            <input id={id} name={id} type="text" />
        ];
    }
}
