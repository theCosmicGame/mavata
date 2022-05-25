/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getFirm = /* GraphQL */ `
  query GetFirm($id: ID!) {
    getFirm(id: $id) {
      id
      name
      users {
        items {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        nextToken
      }
      companies {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFirms = /* GraphQL */ `
  query ListFirms(
    $filter: ModelFirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFirms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      firm {
        id
        name
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      profession
      isExternal
      adminRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      hasRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
      firmUsersId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      createdBy {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      admin {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      name
      serviceProvider
      website
      description
      headquarters
      createdAt
      updatedAt
      firmCompaniesId
      userAdminRolesId
      userHasRolesId
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        admin {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        name
        serviceProvider
        website
        description
        headquarters
        createdAt
        updatedAt
        firmCompaniesId
        userAdminRolesId
        userHasRolesId
      }
      nextToken
    }
  }
`;
