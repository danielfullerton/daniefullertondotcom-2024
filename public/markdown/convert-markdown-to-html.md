Markdown is a wonderfully expressive, lightweight and
powerful syntax for writing and displaying information. Similar to HTML, markdown provides
us with the ability to create structured documents, such as READMEs, blog articles,
changelogs, etc. Markdown enables us to write HTML-like documents but without all the extra syntax required
by HTML. Sure, if we need a high level of expressiveness, for building a custom website from scratch for example,
markdown isn't going to suit our needs. However, if we don't need to worry about styling or
tying in scripting (such as JavaScript), we can make life much easier with markdown.
\
\
Not only is markdown easy and fast to write, it's also an efficient and portable format that
is supported by nearly all text editors and can be rendered on many platforms, such as GitHub or Gitlab. As you might have guessed, I chose to use markdown instead of HTML for my blog articles
on this site (this article included!) I personally find it quite difficult to keep track of HTML/CSS and write an
article at the same time, so markdown was a perfect solution for me. It feels much more natural, and markdown can be written in virtually any text editor. The only problem with markdown, of course, becomes rendering it on a webpage in place of the HTML we'd normally use. So,
in this article, I'll discuss how I achieved this and how you can too, so that maybe you can
replace some of your static HTML content with markdown!

# So, What is Markdown Really?

Markdown is a lightweight markup language that allows us to create formatted documents, similar to how
we might use a word processor, or another markup language like HTML. There are a few key benefits of markdown that are
noteworthy:

1. **Markdown is plaintext**. There is no encoding, we don't need any binaries or special tooling to write it,
   and it is written, parsed and rendered all using the same plaintext format.

2. **Styling is a breeze**. Markdown generally places an emphasis on content, and it assumes that styling is
   not a very important factor, or that there will be just one set of styling rules. This is generally true
   for many media types, such as blog posts, news articles or technical documentation.

3. **It still provides much of the power of HTML**, and we can even include HTML inside of markdown. While this isn't usually necessary, it's a nice feature to have when we need it.

### Example of Using Markdown in Place of HTML

Let's take a look at how we might use markdown instead of HTML to get the same effect
without the boilerplate and verbosity of the latter. For example, let's create a page with a header,
caption and image.
\
\
HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <h1>This is our HTML example</h1>
    <span>Caption of our article</span>
    <img
      src="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png"
      alt="Sample Image"
    />
  </body>
</html>
```

\
\
Markdown:

```markdown
# This is our markdown example

Caption of our article
![Sample Image](https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png)
```

As you can see, the markdown example is more concise and reads significantly
easier. This is a big perk when writing, as we can read back over everything without getting lost in a mess
of HTML. If you're curious about the syntax of markdown, [here](https://www.markdownguide.org/cheat-sheet/) is
an awesome cheat sheet that I refer back to all the time.

# Using Markdown Instead of HTML

Now, just to be clear: I am not saying we can fully replace HTML with markdown. In fact, probably
not even close; HTML exists for a very good reason and solves many use cases. If you're a web developer,
you'll never completely avoid HTML. What we're talking about here instead is using markdown when
there's no benefit to using the more verbose HTML syntax, or perhaps when there's a significant advantage
to using the lighter syntax of markdown.

### Simple, Automatic Conversion Using Marked

```shell
$ npm i marked
```

Since browsers usually can't properly render markdown, we need to find a way to convert markdown to
HTML. A very popular JavaScript library called [Marked](https://www.npmjs.com/package/marked), available via _npm_,
makes this process incredibly simple.
\
\
The simplest way to use Marked is to pass in markdown text directly, like so:

```js
const htmlOutput = marked(
  "# This is our markdown that we hope will be converted!"
);
```

\
Now, we can add the _htmlOutput_ result into our DOM and render an H1 element. Of course,
this isn't any simpler than just adding an H1 element manually, right? Plus, having to enter
all of our markdown into strings like this is going to be even more tedious than just writing
HTML.

### Using Markdown Files as a Source for Marked

Really, Marked is a powerful library with a very simple API. If we want to parse markdown files
instead of just strings, we can very easily implement this ourselves. Let's pretend we have a static
web server that we can use to fetch any of our markdown files. Then, we can just as easily request
one of those files with a **GET** call, pass the result directly into Marked, and we're good!

```js
request
  .get("https://mystaticwebserver.com/someMarkdownFile.md")
  .then((fileContents) => {
    const html = marked(fileContents);
    addToDom(html);
  });
```

\
Now, we can take entire markdown files and render them as HTML! We can also create a generic function,
as we did above, to add that HTML to the DOM.
\
\
_Just a note: For what it's worth, my own approach is to load markdown content via HTTP and then pass the string contents of that file to Marked, as we saw in the first approach._

# Custom Markdown to HTML Conversion

Now this is the thing I was most excited to talk about. Due to the sophisticated design of the Marked library,
we actually get the ability to _override_ its parser when we want to! This means that we can tweak any of
the outputted HTML to match exactly what we'd like to see on our website. The default styling that is generated
can at times leave something to be desired, so this is a great option for us to have.

### Overriding the HTML Generation

First, we'll need to import Marked:

```js
const marked = require("marked");
```

Now, we can override any of the default Marked renderer properties to do whatever we want with
elements in our markdown. For example:

```js
marked.use({
  paragraph: (text: string): string => {
    return `<p class="body-text-font margin-10 top bottom">${text}</p>`;
  },
});
```

Let's look closely at what we just did above. We were able to take a specific situation, in this case when we encountered
a "paragraph" in our markdown, and choose to return a paragraph tag with custom styling.

### Using Custom Parsing to Include Markdown Metadata

Just a quick note: if you aren't familiar or comfortable with regular expressions, I'd recommend you skip or come back to this
section. We won't be using any complex patterns necessarily, but a good understanding of regex will help a lot here.

Now then, one thing that markdown lacks is the ability to include metadata, or really any content that is not meant to actually
be rendered. For example, in my blog articles, I want to be able to include metadata such as the article title, the date it was written, tags, etc. directly in the markdown file. However, since we are using the Marked library, we actually get the opportunity to change that! Let's see how:

First, we need to define a pattern that we want to use to indicate when something is metadata in our markdown. This should be
something fairly unique, as we don't want any false positives to show up in our real content. Let's roll with this one for the
sake of this example:

```js
const regex = /<--#metadata(\n)*(([A-Za-z]* ?= ?.*)(\n)*)*-->/;
```

Now, we have a pattern that essentially expects any content between `<--#metadata` and `-->` to be a match. For example:

```markdown
<--#metadata
Here is some metadata that we will be able to find using our regular expression.
-->
```

Now, we need to find a way to use this pattern with Marked so that we can actually grab the metadata! You may have
noticed that our pattern looks very similar to an HTML comment - and that's on purpose! We can leverage this by using
custom parsing again, but this time we will be using the renderer's `html` method instead. This is because Marked sees
our "HTML comment" and treats it as if it was inline HTML within our markdown.

```js
const htmlRenderer = (html: string) => {
  if (metadataExpression().test(html)) {
    const attributes = parseMetadataAttributes(html);

    return `
      <div>
        <h1>${attributes.title.value}</h1>
        <span>Written by: ${attributes.name.value}</span>
      </div>
    `;
  }

  return html;
};

marked.use({
  renderer: {
    html: htmlRenderer,
  },
});
```

Now you can see that we are using our regex pattern to test any HTML that Marked picks up. We make sure that it actually
matches our exact pattern, including the `"#metadata"` tag on the end, so that we know it isn't just a normal HTML element
within our markdown.

Next, we need to implement the `parseMetadataAttributes()` method we called above. This method should parse out
metadata systematically. This will mean that our metadata should have a standard form.
Since we are writing the method, we can make that look however we want; I personally find simple key-value pairs to be
the easiest, so we'll go with that for now:

```markdown
<--#metadata
name = Daniel Fullerton
title = Markdown to HTML
-->
```

So, put simply, we'll have a key, then an equals sign, then a value, and finally a newline. This represents a single piece of metadata.
Using regular expressions, we can write a method that can parse each of these out and place them into a JSON
object. That way we can programmatically use each value:

```js
function parseMetadataAttributes(html) {
  html = html.replace("<--#metadata\n", "").replace("\n-->", "");

  return html
    .split("\n")
    .filter((pair) => !!pair)
    .map((pair) => {
      const [key, value] = pair.split(" = ");
      return {
        [key]: value,
      };
    })
    .reduce((prev, curr) => ({ ...prev, ...curr }));
}
```

Don't get too worried if this function looks complicated! Let's break it down. We first replace the "identifying" part of the
pattern, i.e. the `<--#metadata` and `-->`. Next, put each line into an element of an array, and filter out any empty values.
Lastly, we iterate over the elements, create a JSON object with a key and value for each, and then merge all of them into a single
object using the `.reduce()` method. So, for example, we could now call `attributes.title` and expect to get the value `Markdown to HTML`,
as we defined in our metadata.
\
\
So, at the end of all of this, our custom Marked HTML renderer will render HTML normally when encountered; for example, if we decided to throw in a `<span>` tag in our markdown. However, when the metadata expression is encountered, it will use our custom logic to parse the metadata values inside that expression and render custom HTML containing them.

# Wrap Up

Marked is a really, really cool library. As you might have guessed, I discovered it when I started working on my own blog
site where markdown-to-HTML conversion was very important. The ability to override any of its parsing methods makes for a
really sophisticated, powerful API. Yet, it also offers the simplest factory methods one could think of as well for
simple use cases. I very much look forward to seeing how the library continues to develop over time and seeing new ways
I can utilize it. Until next time, thanks for reading!
