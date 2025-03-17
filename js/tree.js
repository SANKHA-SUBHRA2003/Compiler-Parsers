function Tree(value, children) 
{
	this.value = value;
	this.children = children;
	this.toString = function() {
		return this.value.toString();
	}
}