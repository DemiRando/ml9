import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
import {SANITY_TOKEN} from '@env'

const client = SanityClient({
    projectId:"rf1p85vt",
    dataset:"production",
    useCdn: true,
    apiVersion:"2021-10-21",
    token:SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);
export const urlFor =(source) => builder.image(source);
export default client;