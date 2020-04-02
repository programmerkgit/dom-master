

## Range
1. Range has start and end point.
2. start and end is HTML Node.
3. Range has parent node.
4. start node and end node is denoted by offset from parent node.
5. Range is within selection Object.

## Methods
- setStart(node, offset) set start at: position offset in node
- setStartBefore(node) set start at: right before node
- setStartAfter(node) set start at: right after node
- Set range end (similar methods):

- setEnd(node, offset) set end at: position offset in node
- setEndBefore(node) set end at: right before node
- setEndAfter(node) set end at: right after node

## Other manipulations
selectNode(node) set range to select the whole node
selectNodeContents(node) set range to select the whole node contents
collapse(toStart) if toStart=true set end=start, otherwise set start=end, thus collapsing the range
cloneRange() creates a new range with the same start/end
To manipulate the content within the range:

deleteContents() – remove range content from the document
extractContents() – remove range content from the document and return as DocumentFragment
cloneContents() – clone range content and return as DocumentFragment
insertNode(node) – insert node into the document at the beginning of the range
surroundContents(node) – wrap node around range content. For this to work, the range must contain both opening and closing tags for all elements inside it: no partial ranges like <i>abc.


## Selection events
There are events on to keep track of selection:

elem.onselectstart – when a selection starts on elem, e.g. the user starts moving mouse with pressed button.
Preventing the default action makes the selection not start.
document.onselectionchange – whenever a selection changes.
Please note: this handler can be set only on document.
