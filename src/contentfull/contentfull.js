export const ProjectListQuery = (projectListID) => {
	const query = `
		{
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
						thumb {
							url
						}
					}
				}
			}
		}
	`
	return query;
}


export const ProjectQuery = () => {
	const query = `
		{
			query {
				projectList(id: "${process.env.REACT_APP_PROJECTLIST_ID}") {
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
						thumb {
							url
						}
					}
				}
			}
		}
	`
	return query;
}