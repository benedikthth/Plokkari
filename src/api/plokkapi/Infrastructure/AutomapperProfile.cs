using AutoMapper;
using plokkapi.Models;
using System;
//using christmas_beer_tasting_api.Models.Beers;
//using christmas_beer_tasting_api.Models.Groups;
//using christmas_beer_tasting_api.Models.Events;
//using christmas_beer_tasting_api.Models;
//using christmas_beer_tasting_api.Models.Authentication;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Hexagon, HexagonDto>().ForMember(dest => dest.H3Id, opts => opts.MapFrom(src => Convert.ToString(src.H3Id, 16)));
        //CreateMap<NewBeerReviewRequest, BeerReview>();
        //CreateMap<NewGroupRequest, Group>();
        //CreateMap<Group, GroupDto>();
        //CreateMap<NewEventRequest, Event>();
        //CreateMap<User, UserDto>();
    }
}