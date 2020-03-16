const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
  const postsByUser = await prisma.deleteManyUsers({id: 'ck73kionj00e90771dcds1tpp'})

  const posts = await prisma.deleteManyPosts({published: false})

  const allUsers = await prisma.users()
  console.log(allUsers)

  const allposts = await prisma.posts()
  console.log(allposts)
}

main().catch(e => console.error(e))