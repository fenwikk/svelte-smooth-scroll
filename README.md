# svelte-smooth-scroll

Simple Svelte Smooth Scroll inspired by valmisson/svelte-scrolling

## Usage

```html
<button on:click={() => scrollTo('section-1')}> Go to 1</button>
<button on:click={() => scrollTo('section-2')}> Go to 2</button>
<button on:click={() => scrollTo(section3)}> Go to 3</button>

<div use:smoothScroll={'section-1'}>
	<h1>Section 1</h1>
</div>
<div id="section-2" use:smoothScroll>
	<h1>Section 2</h1>
</div>
<div bind:this={section3}>
	<h1>Section 3</h1>
</div>
```
