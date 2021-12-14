import { NextPage, GetStaticProps } from 'next'
import React, { useCallback } from 'react'
import Router, { useRouter } from 'next/router'
//
import { COLLECTION_LIMIT } from '@/constants'
import { Domain, Usecase } from '@/features'
import { Screens } from '@/components'

const SearchPage: NextPage = () => {
  return <Screens.SearchScreen action={{}} state={{}} />
}

export default SearchPage
