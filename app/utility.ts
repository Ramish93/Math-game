class Utility {
static getInputV(id: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(id)
        return inputElement.value;
    }
}