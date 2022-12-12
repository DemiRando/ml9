import SanityClient from '../../sanity'

const SetTier = async (tier,id,role) => {

  if(role === 'Jungle'){
    const doc = {
      _id: id,
      _type: 'g7tiers',
      id: id,
      jglTier: tier,
      
    }
    
   await SanityClient.createIfNotExists(doc)
    
   await SanityClient.patch(id).set(doc).commit()
  }
  if(role === 'Mid'){
    const doc = {
      _id: id,
      _type: 'g7tiers',
      id: id,
      midTier: tier,
      
    }
    
    await SanityClient.createIfNotExists(doc)
    
    await SanityClient.patch(id).set(doc).commit()
  }
  if(role === 'Roam'){
    const doc = {
      _id: id,
      _type: 'g7tiers',
      id: id,
      roamTier: tier,
      
    }
    
    await SanityClient.createIfNotExists(doc)
    
    await SanityClient.patch(id).set(doc).commit()
  }
  if(role === 'Xp'){
    const doc = {
      _id: id,
      _type: 'g7tiers',
      id: id,
      xpTier: tier,
      
    }
    
    await SanityClient.createIfNotExists(doc)
    
    await SanityClient.patch(id).set(doc).commit()
  }
  if(role === 'Gold'){
    const doc = {
      _id: id,
      _type: 'g7tiers',
      id: id,
      goldTier: tier,
      
    }
    
    await SanityClient.createIfNotExists(doc)
    
    await SanityClient.patch(id).set(doc).commit()
  }
    
}

export default SetTier