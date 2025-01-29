using Microsoft.AspNetCore.Mvc.Rendering;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Cms.Core.Models.Blocks;

namespace NorthWestEHealth.Extensions
{

	public static class PublishedContextExtensions
	{
		public static Home? GetHomePage(this IPublishedContent publishedContent)
		{
			return publishedContent.AncestorOrSelf<Home>();
		}
		public static SiteSettings? GetSiteSettings(this IPublishedContent publishedContent)
		{
			var homePage = GetHomePage(publishedContent);
			if (homePage == null) return null;
			//#region
			//// representing Content Tree

			//var contentPage = homePage.FirstChild<ContentPage>();
			//var searchPage = homePage.FirstChild<SearchPage>();
			//var siteSettings = homePage.FirstChild<SiteSettings>();
			//var pageTags = homePage.FirstChild<PageTags>();
			//var pageTag = homePage.FirstChild<PageTag>();


			//var siteSetting_pageTags = siteSettings?.FirstChild<PageTags>();
			//var siteSetting_pageTag = siteSettings.FirstChild<PageTag>();

			//var siteSetting_pageTags_pageTag = siteSetting_pageTags?.FirstChild<PageTag>();

			//// representing Content Tree
			//#endregion
			return homePage.FirstChild<SiteSettings>();
		}


		public static BlockGridArea? GetMainFooterData(this SiteSettings publishedContent)
		{
			var siteSettings = GetSiteSettings(publishedContent);
			if (siteSettings == null) return null;
			var footerData = publishedContent.FooterContentProperty.First().Areas.First();
			return footerData;
		}

		public static string GetMetaTitleOrName(this IPublishedContent publishedContent, string? metaTitle)
		{
			if (!string.IsNullOrWhiteSpace(metaTitle)) return metaTitle;
			return publishedContent.Name;
		}

		public static string? GetSiteName(this IPublishedContent publishedContent)
		{
			var homePage = publishedContent.GetHomePage();
			if (homePage == null) return null;
			var siteSettings = homePage.GetSiteSettings();
			if (siteSettings == null) return null;
			return siteSettings?.Name ?? null;
		}
		//public static IEnumerable<SelectListItem>? GetPageTagsSelectList(this IPublishedContent publishedContent)
		//{
		//	IEnumerable<SelectListItem>? allTags = null;

		//	var siteSettings = publishedContent.GetSiteSettings();

		//	if (siteSettings == null) return null;

		//	var pageTagsContainer = siteSettings.FirstChildOfType(PageTags.ModelTypeAlias);
		//	if (pageTagsContainer?.Children != null && pageTagsContainer.Children.Any())
		//	{
		//		var pageTags = pageTagsContainer.Children.Select(x => x as PageTag).Where(y => y != null);
		//		allTags = pageTags.Select(x => new SelectListItem() { Text = x!.Name, Value = x.TagAlias });
		//	}

		//	return allTags;
		//}

	}
}
