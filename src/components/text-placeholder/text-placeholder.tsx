import { Component, Prop } from "@stencil/core";

@Component({
    tag: "vanilla-text-placeholder",
    styleUrl: "text-placeholder.scss",
    shadow: true
})
export class VanillaTextPlaceholder {
    @Prop() lines: string;

    render() {
        return (
            Array.from({
                length: parseInt(this.lines)
            },
            () => <div class="placeholder-line"></div>)
        );
    }
}