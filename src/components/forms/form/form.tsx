import { Component } from "@stencil/core";

@Component({
    tag: "vanilla-form",
    styleUrl: "form.scss",
    // shadow: true
})
export class VanillaTextPlaceholder {

    private onSubmit = (event: Event) => {
        console.log(new FormData(event.target as HTMLFormElement));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <slot />
            </form>
        );
    }
}
