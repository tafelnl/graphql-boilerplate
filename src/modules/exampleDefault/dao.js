const database = {
  book: [
    {
      book_id: 1,
      title: 'In Search of Lost Time',
      author_id: 1,
      ranking: 1,
      stars: 5,
      featured: true
    },
    {
      book_id: 2,
      title: 'Ulysses',
      author_id: 2,
      ranking: 2,
      stars: 5,
      featured: false
    },
    {
      book_id: 3,
      title: 'Don Quixote',
      author_id: 3,
      ranking: 3,
      stars: 4,
      featured: true
    },
  ],
  author: [
    {
      author_id: 1,
      name: 'Marcel Proust'
    },
    {
      author_id: 2,
      name: 'James Joyce'
    },
    {
      author_id: 3,
      name: 'Miguel de Cervantes'
    }
  ]
};
// source: https://thegreatestbooks.org/

module.exports = class ExampleDefaultDao {

	constructor() {
		let name = new.target.name;
		if (new.target === ExampleDefaultDao) {
      throw TypeError(`Cannot instantiate abstract class ${name}`);
    }

		this.db = database;

		this.entityName = this.createTrueEntityName(name);
    this.entityKey = `${this.entityName}_id`;
	}

	createTrueEntityName(entityName) {

    if (entityName.endsWith('Dao')) {
      entityName = entityName.substring(0, entityName.length - 3);
    }

		let i = 0;
		let char = '';
		let outputEntityName = '';
		while( i < entityName.length) {
			char = entityName.charAt(i);
			if(char !== '_' && char === char.toUpperCase() && i > 0 && entityName.charAt(i - 1) !== '_') {
				char = '_' + char;
			}
			outputEntityName += char.toLowerCase();
			i++;
		}
		return outputEntityName;
	}

  async getById(id) {
    return this.find({
      [this.entityKey]: id
    });
  }

  async find(args, multiple = false, shallow = false) {
    const findMethod = (multiple) ? 'filter' : 'find';
    return this.db[this.entityName][findMethod]((item) => {
      let match = true;
      for (let [key, value] of Object.entries(args)) {
        if (item[key]) {
          if (shallow && typeof item[key] === 'string') {
            if (!item[key].startsWith(value)) {
              match = false;
            }
          } else {
            if (item[key] != value) {
              match = false;
            }
          }
        } else {
          match = false;
        }
      }
      return match;
    });
  }

  // async updateById(input, id) {
  //   return this.update(input, {
  //     [this.entityKey]: id
  //   });
  // }
  //
  // async update(input, args) {
  //   await this.db[this.entityName].update(input, {
  //     where: args
  //   });
  //   return this.find(args);
  // }
  //
  // async create(input) {
  //   return this.db[this.entityName].create(input).then((result) => {
  //     return result.get({ plain: true });
  //   });
  // }

}
