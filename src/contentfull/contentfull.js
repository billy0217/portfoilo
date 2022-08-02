export const ProjectListQuery = (projectListID) => {
	const query = `
		
		query {
			projectList(id: "${projectListID}") {
				projectsCollection {
					items {
						sys{
							id
						}
					}
				}
			}
			projectCollection {
				items {
					sys {
						id
					}
					name
					slug
					role
					workFrom
					thumb {
						url
					}
				}
			}
		}
		
	`
	return query;
}


export const ProjectQuery = (slug) => {
	const query = `
		
			query {
				projectCollection(where: {slug: "${slug}"}) {
					items {
						name
						slug
						client
						link
						role
						workFrom
						type
						tech
						image {
							url
						}
						imagesCollection {
							items {
								url
							}
						}
						description {
							json
						}
					}
				}
			}
		
	`
	return query;
}