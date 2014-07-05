/*
 * Included from ./shared/history.js in root.
 *
 * Do not modify the copies of this file. Run "rake" in root to
 * propogate changes.
 */

var History = {
    MAX_ITEMS: 25,
    DEFAULT_ICON: null,

    add: function(item) {
        var list = this.get();
        if (list.indexOf(item) !== -1)
            return false;
        
        list.push(item);
        if (list.length > this.MAX_ITEMS)
            list.shift();

        Cache.set('history', list.reverse());
        return true;
    },

    get: function() {
        return Cache.get('history') || [];
    },

    suggestions: function(query) {
        var history = this.get();
        if (query === "")
            return history;

        query = query.toLowerCase();
        return history.filter(function(item) {
            return item.toLowerCase().indexOf(query) !== -1;
        });
    }
};
