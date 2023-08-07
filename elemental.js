let elemental = {
    knownElements: {},
    create: function(creator, name) {
        if(name === undefined)
            name = creator.name;
        this.knownElements[name.toLowerCase()] = creator;
        return name;
    },
    makeAttributeObject: function(nodeMap) {
        let attributes = {};
        for (const attr of nodeMap) {
            attributes[attr.name] = attr.value;
        }
        return attributes;
    },
    renderType: function(type) {
        const creator = this.knownElements[type.toLowerCase()];

        const elements = document.getElementsByTagName(type);
        for (const element of elements) {
            element.innerHTML = creator(this.makeAttributeObject(element.attributes));
        }
    },
    render: function() {
        for (const key of Object.keys(this.knownElements)) {
            this.renderType(key);
        }
        return true;
    },
    renderId: function(id) {
        const element = document.getElementById(id);
        const type = element.nodeName;
        const creator = this.knownElements[type.toLowerCase()];
        element.innerHTML = creator(this.makeAttributeObject(element.attributes));
    }
};

window.addEventListener('load', (event) => {
    elemental.render();
});
