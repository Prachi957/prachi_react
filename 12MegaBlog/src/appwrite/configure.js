import config from "../config.js";
import {Client, Account, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, status, featuredImage, userId}) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title, content, status, featuredImage, userId})
        } 
        catch (error) {
            console.log("Appwrite Service :: createPost :: Error", error);
        }
    }

    async updatePost(slug, {title, content, status, featuredImage}) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {title, content, status, featuredImage})
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: Error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: Error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
           return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite Service :: getPost :: Error", error);
            return false;
        }
    }
    
    //To get only those posts whose status is active.

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: Error", error);
            return false;
        }
    }

    //File upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId, ID.unique(), file
            )
            
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: Error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId)
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: Error", error);
            return false;
            
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId);

    }

}

const service = new Service();

export default service;